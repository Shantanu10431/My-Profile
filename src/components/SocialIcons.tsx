import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    import("gsap").then(({ gsap }) => {
      social.querySelectorAll("span").forEach((item) => {
        const elem = item as HTMLElement;
        const link = elem.querySelector("a") as HTMLElement;

        const onMouseMove = (e: MouseEvent) => {
          const rect = elem.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(link, {
            x: x * 0.4,
            y: y * 0.4,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const onMouseLeave = () => {
          gsap.to(link, {
            x: 0,
            y: 0,
            duration: 0.4,
            ease: "elastic.out(1, 0.3)",
          });
        };

        elem.addEventListener("mousemove", onMouseMove);
        elem.addEventListener("mouseleave", onMouseLeave);

        (elem as any)._cleanup = () => {
          elem.removeEventListener("mousemove", onMouseMove);
          elem.removeEventListener("mouseleave", onMouseLeave);
        };
      });
    });

    return () => {
      social.querySelectorAll("span").forEach((item) => {
        const elem = item as any;
        if (elem._cleanup) elem._cleanup();
      });
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/Shantanu10431" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/shantanu-kandakur-35087527a/" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="#" target="_blank">
            <FaXTwitter />
          </a>
        </span>
        <span>
          <a href="#" target="_blank">
            <FaInstagram />
          </a>
        </span>
      </div>
      <a className="resume-button" href="#">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
