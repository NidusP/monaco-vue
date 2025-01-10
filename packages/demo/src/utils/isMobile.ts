/*************  ✨ Codeium Command ⭐  *************/
/**
 * Returns true if the user is using a mobile device, or false otherwise.
 * The string that is matched against is:
 * (phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)
 * This is a simple and naive approach, and may not cover all mobile devices.
 */
/******  30a940b6-04f8-4da9-b741-9793903f755c  *******/

const match = window.navigator.userAgent.match(
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
);

export const isMobile = !!match;
