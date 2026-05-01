export interface SpringConfig {
    stiffness: number;
    damping: number;
    mass?: number;
}
export interface SpringState {
    position: number;
    velocity: number;
}
export interface SpringStepResult extends SpringState {
    settled: boolean;
}
export declare function springStep(config: SpringConfig, state: SpringState, target: number, dt: number): SpringStepResult;
export declare const SPRING_OPEN: SpringConfig;
export declare const SPRING_CLOSE: SpringConfig;
