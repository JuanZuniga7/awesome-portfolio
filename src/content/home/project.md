# About This Project

After numerous iterations and attempts to find a design that combines both aesthetic appeal and ease of maintenance, this portfolio represents what is likely its final version.  
This project marks the tenth iteration, with only a few versions surviving more than a month of active use. The others were discarded following constructive feedback from colleagues and trusted peers, whose opinions were highly valued.  
Only the versions that have stood the test of time and functionality are available in the repository and the projects section of this portfolio.

## Key Differences from Previous Projects

This version is one of many developed in the pursuit of the ideal balance between design and functionality. The following are the key considerations that differentiate this version:

* Although it does not fully adopt a microkernel architecture, the project’s directory structure is organized in a manner that closely resembles it, particularly in terms of module communication.  
  Great care was taken to ensure that the modules remain independent. Shared resources are located in the core, with the exception of the content and page directories, following Astro’s recommendations. This approach was chosen to adhere to best practices while further mastering the framework.
  
* The content for each section and article, in most cases, is managed through Markdown and Astro’s content collections, a significant departure from earlier projects, which relied heavily on JSON.

* While previous portfolios have also been developed using Astro, this particular version incorporates React as a library for handling interactivity. Although interactivity is minimal, React provides effective functionality where needed.

* In key sections, this project behaves similarly to a blog, with the primary goal of providing recruiters with all the necessary information to make informed decisions efficiently.

In this project, various approaches were taken to adhere to SOLID principles as needed. This is the only version of the portfolio that includes testing, aligning with the teachings in *Clean Code by Robert C. Martin.* 
As the book states:

> Code without tests is not clean code. You can’t refactor without tests. If you can’t refactor, you can’t clean the code.

It’s possible that other design patterns were implemented subconsciously; however, one thing is certain—if they were applied, it was because they were entirely necessary.

To conclude, I would like to express my gratitude for paying close attention to the explanation of this code.
