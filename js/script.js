// Scripts

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link"),
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Counter Animation
  const counters = document.querySelectorAll(".counter");
  const speed = 200; // The lower the slower

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      // Lower inc to slow and higher to slow
      const inc = target / speed;

      // Check if target is reached
      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = Math.ceil(count + inc);
        // Call function every ms
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target;
      }
    };

    // Scroll Observer for Triggering Animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCount();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(counter);
  });

  // WhatsApp Redirection for Order Form
  const orderForm = document.getElementById("orderForm");
  if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!this.checkValidity()) {
        e.stopPropagation();
        this.classList.add("was-validated");
        return;
      }

      const name = document.getElementById("orderName").value;
      const email = document.getElementById("orderEmail").value;
      const phone = document.getElementById("orderPhone").value;
      const projectType = document.getElementById("orderProject").value;
      const variety = document.getElementById("orderGranite").value;
      const quantity = document.getElementById("orderQuantity").value;
      const message = document.getElementById("orderMessage").value;

      const whatsappNumber = "918438443477";
      const text = `*New Order Inquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Project Type:* ${projectType}\n*Granite Variety:* ${variety}\n*Quantity:* ${quantity}\n*Details:* ${message}`;
      
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, "_blank");
      this.reset();
      this.classList.remove("was-validated");
    });
  }

  // Handle Contact Inquiry Form (Redirect to WhatsApp as well for consistency)
  const contactForm = document.getElementById("contactInquiryForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!this.checkValidity()) {
        e.stopPropagation();
        this.classList.add("was-validated");
        return;
      }

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const projectType = document.getElementById("projectType").value;
      const variety = document.getElementById("graniteType").value;
      const quantity = document.getElementById("quantity").value;
      const message = document.getElementById("message").value;

      const whatsappNumber = "918438443477";
      const text = `*New Contact Inquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Project Type:* ${projectType}\n*Granite Variety:* ${variety}\n*Quantity:* ${quantity}\n*Details:* ${message}`;
      
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, "_blank");
      this.reset();
      this.classList.remove("was-validated");
    });
  }
});
