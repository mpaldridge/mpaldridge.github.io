import type { SpringConfig } from './physics/spring';
export type LightboxEventType = 'open' | 'opened' | 'close' | 'closed' | 'navigate' | 'zoomIn' | 'zoomOut';
export interface LightboxEventDetail {
    /** The full-res image URL */
    src: string;
    /** The trigger element (anchor or element with data-lightbox) */
    triggerEl: HTMLElement;
    /** Current index in the gallery (0 for standalone images) */
    index: number;
    /** Total items in the gallery (1 for standalone images) */
    total: number;
}
export type LightboxEventCallback = (detail: LightboxEventDetail) => void;
export interface LightboxOptions {
    selector?: string;
    springOpen?: SpringConfig;
    springClose?: SpringConfig;
    padding?: number;
    debug?: boolean;
}
export declare class Lightbox {
    private static instance;
    private opts;
    private listeners;
    private state;
    private zoom;
    private overlay;
    private backdrop;
    private imgEl;
    private stripEl;
    private currentSlideEl;
    private prevSlideEl;
    private prevSlideImg;
    private nextSlideEl;
    private nextSlideImg;
    private gallery;
    private currentIndex;
    private userHasNavigated;
    private stripRafId;
    private stripOffset;
    private pendingNavDirection;
    private swipeNav;
    private preloadCache;
    private preloadTimer;
    private preloadQueue;
    private preloadingActive;
    private velocitySamples;
    private pointerCache;
    private pinch;
    private dismiss;
    private rafId;
    private bounceRafId;
    private cropInsets;
    private thumbBorderRadius;
    private isTextLink;
    private spinnerEl;
    private spinnerTimer;
    private chromeBar;
    private chromeCounter;
    private chromeCaption;
    private chromeClose;
    private chromePrev;
    private chromeNext;
    private chromeRafId;
    private chromeSpring;
    private chromeBaseOpacity;
    private chromeDriftProgress;
    private chromeDriftVectors;
    private chromeFadeSwapped;
    private pressSprings;
    private pressRafId;
    private fitRafId;
    private previouslyFocusedEl;
    private savedBodyOverflow;
    private savedHtmlPaddingRight;
    private wheelDismissY;
    private wheelGestureTimer;
    private wheelSnapBackTimer;
    private wheelNavCommitted;
    private wheelNavTotalDelta;
    private reducedMotion;
    private reducedMotionQuery;
    constructor(opts?: LightboxOptions);
    static init(opts?: LightboxOptions): Lightbox;
    on(event: LightboxEventType, callback: LightboxEventCallback): this;
    off(event: LightboxEventType, callback: LightboxEventCallback): this;
    private emit;
    private attach;
    destroy(): void;
    private defaultZoomState;
    private defaultPinchState;
    private defaultDismissState;
    private defaultSwipeNavState;
    private handlePointerEnter;
    private handlePointerLeave;
    private cancelPreload;
    private preloadImage;
    private schedulePreloads;
    private enqueueRemainingPreloads;
    private processPreloadQueue;
    private buildGallery;
    private handleClick;
    private handleKeydown;
    private trapFocus;
    private getSrcFromTrigger;
    open(src: string, triggerEl?: HTMLElement): void;
    private openTextLink;
    /** Run the FLIP morph for a text-link trigger once image dimensions are known. */
    private openTextLinkWithImage;
    /**
     * Build a rect centered on the text link with the image's aspect ratio.
     * Sized so the shorter dimension matches the text link's height.
     */
    private textLinkFlipRect;
    private removeSpinner;
    private swapToFullRes;
    /** Spring-animate the image from one fit rect to another (aspect ratio change). */
    private animateFitTransition;
    private stopFitTransition;
    close(): void;
    private finishClose;
    /**
     * "Catch" bounce: the trigger element squishes down slightly then
     * springs back to normal scale, as if catching the lightbox image.
     * Runs on its own rAF loop so it doesn't interfere with the main spring.
     */
    private bounceTrigger;
    next(): void;
    prev(): void;
    private navigateTo;
    private completeNavigation;
    /**
     * After strip animation completes, reposition slide elements so the new
     * current image is at left:0. Remove the old far slide, create a new one
     * at the opposite edge.
     */
    private recycleSlots;
    /** Set up zoom state and image src for the newly-centered current image. */
    private setupCurrentImage;
    /**
     * If a strip spring is running (from a flick or arrow key), resolve it so
     * the user can start a new gesture from a clean state.
     */
    private resolveStripAnimation;
    private animateSpring;
    private applyAnimState;
    private animateStrip;
    private stopStripSpring;
    private applyStripOffset;
    /**
     * Cross-fade caption and counter as the strip slides between images.
     * Opacity follows a V-curve: 1 → 0 at midpoint → 1.
     * Text content swaps at the midpoint so the new caption fades in.
     */
    private updateChromeFade;
    /**
     * Rubber-band bounce at gallery edges. Kicks the strip with velocity in the
     * attempted direction — the spring overshoots then settles back to 0,
     * hinting that there are no more images that way.
     * direction: 1 = shift right (at first image), -1 = shift left (at last).
     */
    private bounceStrip;
    /**
     * If a strip animation is in progress, stop it and resolve immediately.
     * Navigation animations are completed (index updated, slots recycled).
     * Bounce animations are just cancelled (strip reset to 0).
     */
    private forceCompleteStripAnimation;
    private isZoomable;
    private getTapZoomScale;
    private getMaxZoomScale;
    private zoomIn;
    private zoomOut;
    private handleImagePointerDown;
    private handleOverlayPointerDown;
    private handlePointerMove;
    private handlePointerUp;
    private addVelocitySample;
    private computeVelocity;
    private handleDismissMove;
    private applyDismissTransform;
    private handleDismissRelease;
    private dismissClose;
    private dismissSnapBack;
    private lockBodyScroll;
    private unlockBodyScroll;
    private handleWheel;
    private handleScroll;
    private wheelPan;
    private scheduleWheelSnapBack;
    private wheelNavigate;
    private wheelDismiss;
    private startSwipeNav;
    private handleSwipeNavMove;
    private handleSwipeNavRelease;
    private completeSwipeNav;
    private snapBackSwipeNav;
    private startPinch;
    private updatePinch;
    private endPinch;
    private pinchClose;
    private pinchSnapBack;
    private springToZoomState;
    private startPanMomentum;
    private stopSpring;
    private applyPanTransform;
    private computePanBounds;
    private handleImageClick;
    private updateCursorState;
    private createChrome;
    private getCurrentCaption;
    private getCurrentAlt;
    private updateChromeContent;
    private updateArrowVisibility;
    /**
     * Compute per-element drift vectors from a thumbnail origin point.
     * Each vector points from the element's resting position back toward the origin,
     * scaled by CHROME_DRIFT. During animation, these are multiplied by chromeDriftProgress
     * so elements appear to launch from / return to the thumbnail location.
     */
    private computeChromeDrift;
    private resetChromeDrift;
    private animateChrome;
    private updateChromeVisuals;
    private stopChromeSpring;
    private bindPressSpring;
    private getPressScale;
    private animatePressSpring;
    private startPressLoop;
    private createOverlay;
    private createSlide;
    /** Create and position an adjacent (prev or next) slide in the strip. */
    private createAdjacentSlide;
    /** Set the src and position for an adjacent slide's image. */
    private setupSlideImage;
    /** Position an image element at the given rect. */
    private positionImageEl;
    /** Populate prev and next slides for gallery navigation. */
    private populateAdjacentSlides;
    private removeOverlay;
    private positionImage;
    /** Target border-radius for the lightbox image, read from --lb-image-border-radius CSS property. */
    private getTargetBorderRadius;
    /** Viewport padding around the lightbox image, read from --lb-image-padding CSS property. */
    private getTargetImagePadding;
    /** Read the visual border-radius from the thumbnail's trigger element. */
    private getThumbBorderRadius;
    private getThumbRect;
    private computeCropInsets;
    /**
     * Compute FLIP scale and crop insets for morphing between the lightbox image
     * and a thumbnail. Handles both CSS object-fit:cover cropping and server-side
     * aspect ratio mismatches (e.g. Unsplash ?fit=crop).
     */
    private computeFlipCrop;
    private setThumbVisibility;
    private computeTargetRect;
    /** Like computeTargetRect but without the scale ≤ 1 cap. Used when full-res
     *  dimensions are unknown — fills the viewport based on aspect ratio alone. */
    private computeTargetRectFromAspectRatio;
    private loadImage;
    private isInViewport;
    private debugEl;
    private debugStateEl;
    private debugLogEl;
    private debugRafId;
    private debugLogEntries;
    private debugT0;
    private startDebugPanel;
    private stopDebugPanel;
    private debugLog;
    private updateDebugPanel;
}
