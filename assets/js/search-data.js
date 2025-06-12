// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-curriculum-vitae",
          title: "curriculum vitae",
          description: "Download the PDF for my CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-presented-my-work-bayesian-ensembles-for-exploration-in-deep-q-learning-as-a-poster-at-aamas-24-and-oral-presentation-at-ala-24",
          title: 'Presented my work “Bayesian Ensembles for Exploration in Deep Q-learning” as a poster...',
          description: "",
          section: "News",},{id: "news-my-paper-epistemic-bellman-operators-has-been-accepted-at-aaai-25",
          title: 'My paper Epistemic Bellman Operators has been accepted at AAAI’25!',
          description: "",
          section: "News",},{id: "news-presented-my-paper-epistemic-bellman-operators-at-aaai-25-as-an-oral-presentation",
          title: 'Presented my paper Epistemic Bellman Operators at AAAI’25 as an oral presentation!',
          description: "",
          section: "News",},{id: "news-reviewing-five-papers-for-neurips-2025",
          title: 'Reviewing five papers for Neurips 2025.',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70.%72.%76%61%6E%64%65%72%76%61%61%72%74-%31@%74%75%64%65%6C%66%74.%6E%6C", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/pascal314", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/pascalvandervaart", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=oUExdSAAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
