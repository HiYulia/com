// 页面滚动动画
document.addEventListener("DOMContentLoaded", () => {
  // 导航栏滚动效果
  const header = document.querySelector("header");
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 100) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }
    lastScroll = currentScroll;
  });

  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // 页面元素淡入效果
  const sections = document.querySelectorAll("section");

  const fadeInOnScroll = () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }
    });
  };

  // 初始化sections的样式
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.5s ease-in-out";
  });

  // 监听滚动事件
  window.addEventListener("scroll", fadeInOnScroll);
  // 初始加载时也执行一次
  fadeInOnScroll();
});

// 添加打字机效果
const typeWriter = (element, text, speed = 100) => {
  let i = 0;
  element.innerHTML = "";
  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
};

// 页面加载完成后执行打字机效果
window.addEventListener("load", () => {
  const slogan = document.querySelector(".slogan");
  const originalText = slogan.innerHTML;
  typeWriter(slogan, originalText);
});
