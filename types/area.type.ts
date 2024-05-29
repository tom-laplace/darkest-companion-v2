import { curio } from "./curio.type";

export type area = {
    name: 'ruin' | 'warrens' | 'weald' | 'cove' | 'general',
    length: 'short' | 'medium' | 'long', 
    curios: curio[],
}