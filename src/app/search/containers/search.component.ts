import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as Tesseract from 'tesseract.js';
import { marketData } from '../../tripod/data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @ViewChild('video') video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;
  worker!: Tesseract.Worker;
  isLoading = false;
  whiteList: string = '';

  constructor() {}

  async ngOnInit() {
    const skills = marketData.marketAuction.marketMenuAuctionSkillList.filter(
      (skill) => skill.class === 505
    );
    const tripods = skills.flatMap((skill) => skill.marketMenuSkillTripodList);
    const skillTexts = skills.map((skill) => skill.text);
    const tripodTexts = tripods.map((tripod) => tripod.text);
    this.whiteList = [
      ...new Set(
        [...skillTexts, ...tripodTexts, '+', '3', '4', '[', ']']
          .map((x) => x.split(''))
          .flat()
      ),
    ].join('');
    this.worker = Tesseract.createWorker({
      // logger: (m) => console.log(m),
      langPath: 'http://localhost:4200/assets',
      cacheMethod: 'refresh',
      gzip: false,
    });
    await this.worker.load();
    await this.worker.loadLanguage('kor');
    await this.worker.initialize('kor', Tesseract.OEM.LSTM_ONLY);
  }

  async start() {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });
    this.video.nativeElement.srcObject = stream;
    setInterval(() => this.scan(), 1000);
  }

  preprocessImage(canvas: HTMLCanvasElement) {
    const processedImageData = canvas
      .getContext('2d')!
      .getImageData(0, 0, canvas.width, canvas.height);

    function thresholdFilter(pixels: Uint8ClampedArray, level: number) {
      if (level === undefined) {
        level = 0.5;
      }
      const thresh = Math.floor(level * 255);
      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const gray = 0.34 * r + 0.5 * g + 0.16 * b;
        let val;
        if (gray >= thresh) {
          val = 255;
        } else {
          val = 0;
        }
        pixels[i] = pixels[i + 1] = pixels[i + 2] = val;
      }
    }
    thresholdFilter(processedImageData.data, 0.75);
    return processedImageData;
  }

  async scan() {
    if (this.isLoading) {
      return;
    }
    console.time();
    this.isLoading = true;
    const canvas = this.canvas.nativeElement;

    canvas.width = 279;
    canvas.height = 82 + 10;
    const ctx = canvas.getContext('2d')!;
    ctx.drawImage(
      this.video.nativeElement,
      85,
      258,
      canvas.width,
      canvas.height,
      5,
      5,
      canvas.width,
      canvas.height
    );
    ctx.globalCompositeOperation = 'difference';
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(this.preprocessImage(canvas), 0, 0);
    await this.worker.setParameters({
      tessedit_char_whitelist: this.whiteList,
      preserve_interword_spaces: '1',
      tessjs_create_hocr: '0',
      tessjs_create_tsv: '0',
    } as any);
    const { data } = await this.worker.recognize(canvas);
    ctx.strokeStyle = 'red';
    data.words.forEach((word) => {
      ctx.strokeRect(
        word.bbox.x0,
        word.bbox.y0,
        word.bbox.x1 - word.bbox.x0,
        word.bbox.y1 - word.bbox.y0
      );
    });
    console.log(data)
    // data.lines.forEach((line) => {
    //   console.log(line.text);
    // });
    this.isLoading = false;
    console.timeEnd();
  }

  async ngOnDestroy() {
    await this.worker.terminate();
  }
}
