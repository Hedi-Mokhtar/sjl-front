export function useStaggeredAnimation(delayIncrement = 0.05) {


  const getAnimationDelay = (index: number) => ({
    animationDelay: `${index * delayIncrement}s`
  })

  return {
    getAnimationDelay
  }
}
