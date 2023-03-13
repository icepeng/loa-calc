// import { availableActions, dispatchAction } from "./game";
// import { Action, GameState } from "./interface";
// import chance from "./rng";

// function availableActions(state: GameState): Action[] {
//   const actions: Action[] = [];
//   if (state.turnLeft === 0) {
//     return actions;
//   }
//   if (!state.sages[0].isExhausted) {
//     actions.push("sage0");
//   }
//   if (!state.sages[1].isExhausted) {
//     actions.push("sage1");
//   }
//   if (!state.sages[2].isExhausted) {
//     actions.push("sage2");
//   }
//   if (state.rerollLeft > 0) {
//     actions.push("reroll");
//   }
//   return actions;
// }

// function dispatchAction(state: GameState, action: Action): GameState {
//   function pickSage(index: number) {
//     const effectRequired = requireEffectSelection(state, {
//       selectedSageIndex: index,
//       selectedEffectIndex: -1,
//     });
//     const effectIndex = effectRequired
//       ? chance.weighted([0, 1, 2, 3, 4], [1, 1, 1, 1, 1])
//       : -1;
//     const uiState = {
//       selectedSageIndex: index,
//       selectedEffectIndex: effectIndex,
//     };

//     const counciled = applyCouncil(state, uiState);
//     return enchant(counciled, uiState);
//   }

//   switch (action) {
//     case "sage0":
//       return pickSage(0);
//     case "sage1":
//       return pickSage(1);
//     case "sage2":
//       return pickSage(2);
//     case "reroll":
//       return reroll(state);
//     default:
//       return state;
//   }
// }

// export function basicEvaluate(
//   state: GameState,
//   [objective1, objective2]: { index: number; value: number }[]
// ): number {
//   const eff1 = state.effects[objective1.index];
//   const eff2 = state.effects[objective2.index];

//   let score = 0;

//   if (eff1.isLocked || eff2.isLocked) {
//     score -= 999999;
//   }
//   if (eff1.value > objective1.value) {
//     score += 1;
//   }
//   if (eff2.value > objective2.value) {
//     score += 1;
//   }

//   return score;
// }

// interface Checkpoint {
//   state: GameState;
//   actions: Action[];
// }

// interface Node {
//   action: Action | null;
//   parent: Node | null;
//   children: Node[];
//   wins: number;
//   visits: number;
// }

// function createNode(action: Action | null, parent: Node | null): Node {
//   return {
//     action,
//     parent,
//     children: [],
//     wins: 1,
//     visits: 1,
//   };
// }

// export function mcts(
//   gameState: GameState,
//   objective: { index: number; value: number }[],
//   maxIterations: number
// ): Action {
//   const rootNode = createNode(null, null);
//   for (let i = 0; i < maxIterations; i++) {
//     let node = rootNode;
//     let state = gameState;
//     let actions = availableActions(state);
//     // Selection
//     while (
//       node.children.length > 0 &&
//       node.children.length === actions.length
//     ) {
//       try {
//         node = selectChild(node);
//         actions = availableActions(state);
//         state = dispatchAction(state, node.action!);
//       } catch (e) {
//         continue;
//       }
//     }
//     // Expansion
//     const expandedNode =
//       state.phase === "done" ? node : expand(node, state, actions);
//     // Simulation
//     const isWin = simulate(state, objective);
//     // Backpropagation
//     backpropagate(expandedNode, isWin);

//     if (i % 1000 === 0) {
//       console.log(`Iteration ${i}`);
//       console.log(rootNode);
//     }
//   }
//   // Choose the best action based on the highest win rate
//   let bestChild = rootNode.children[0];
//   for (const child of rootNode.children) {
//     if (child.wins / child.visits > bestChild.wins / bestChild.visits) {
//       bestChild = child;
//     }
//   }

//   let x = rootNode;
//   while (x.children.length > 0) {
//     console.log(x);
//     let bestChild = x.children[0];
//     for (const child of x.children) {
//       if (child.wins / child.visits > bestChild.wins / bestChild.visits) {
//         bestChild = child;
//       }
//     }
//     x = bestChild;
//   }
//   return bestChild.action!;
// }

// function isWin(
//   state: GameState,
//   objective: { index: number; value: number }[]
// ) {
//   return (
//     state.effects[objective[0].index].value >= objective[0].value &&
//     state.effects[objective[1].index].value >= objective[1].value
//   );
// }

// function ucb1(node: Node) {
//   // UCB1 = average win rate + exploration bonus
//   const C = Math.sqrt(2);
//   return (
//     node.wins / node.visits + C * Math.sqrt(Math.log(node.visits) / node.visits)
//   );
// }

// function selectChild(node: Node) {
//   // Choose a child node based on the UCB1 formula
//   let bestChild = node.children[0];
//   for (const child of node.children) {
//     if (ucb1(child) > ucb1(bestChild)) {
//       bestChild = child;
//     }
//   }
//   return bestChild;
// }

// function expand(node: Node, state: GameState, actions: Action[]) {
//   // Expand a child node by adding a new state to the tree
//   const action = actions.find(
//     (action) => !node.children.find((child) => child.action === action)
//   )!;
//   const childNode = createNode(action, node);
//   node.children.push(childNode);
//   return childNode;
// }

// function simulate(
//   _state: GameState,
//   objective: { index: number; value: number }[]
// ) {
//   // Simulate a game from the current state to the end
//   let state = _state;
//   while (state.phase !== "done") {
//     const actions = availableActions(state);
//     const action = actions[chance.integer({ min: 0, max: actions.length - 1 })];
//     state = dispatchAction(state, action);
//   }
//   return isWin(state, objective);
// }

// function backpropagate(node: Node, isWin: boolean): void {
//   // Update the win and visit counts for all ancestors of this node
//   let _node: Node | null = node;
//   while (_node !== null) {
//     _node.visits++;
//     if (isWin) {
//       _node.wins++;
//     }
//     _node = _node.parent;
//   }
// }
