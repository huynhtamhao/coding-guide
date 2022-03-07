# 🚀️ Programming Environment and Tools

## Deployment environment

- OS:Ubuntu Server (May be <Badge type="tip" text="v20.04 LTS" vertical="middle" />)
- コンテナ:Docker (サーバ側) <Badge type="tip" text="v20.10" vertical="middle" />
- webサーバ:nginx <Badge type="tip" text="v1.21.6 LTS" vertical="middle" />

## Programming environment

- Java (Open JDK) - <Badge type="tip" text="v17.0.1" vertical="middle" /> [(Download)](https://jdk.java.net/17/)
- Node.js - <Badge type="tip" text="v16.13.2 LTS" vertical="middle" /> [(Download)](https://nodejs.org/en/)
- Npm - <Badge type="tip" text="v8.3.0" vertical="middle" />
- Angular - <Badge type="tip" text="v13.1.1" vertical="middle" />
- Postgres - <Badge type="tip" text="v14.1" vertical="middle" />

### Java

- Spring Boot Framework (Current: using <Badge type="tip" text="v2.6.3" vertical="middle"/>
Future: Migration to <Badge type="tip" text="v3.x.x" vertical="middle"/>)
  - Spring Security
  - Spring JPA
  - Spring AOP
  - Lombok
  - Java Mail Sender
  - Spring Boot Actuator
- [Gradle](https://gradle.org/) (Dependence and build tools) <Badge type="tip" text="v7.3.3" vertical="middle" />
- [Mybatis](https://mybatis.org/mybatis-3/)
- [Flyway](https://flywaydb.org/)

### Angular

- Angular cli <Badge type="tip" text="v13.1.1" vertical="middle" />
- [Angular Material Design](https://material.angular.io/) <Badge type="tip" text="v13.1.1" vertical="middle" />
- [Bootstrap for Angular](https://ng-bootstrap.github.io/#/home) <Badge type="tip" text="v11.0.0" vertical="middle" />
  | ng-bootstrap  | Angular | Bootstrap CSS | Note          |
  |:--------------|:--------|:--------------|:--------------|
  | 11.x.x        | 13.0.0  | 4.6.0         | recommend     |
  | 12.0.0-beta.x | 13.0.0  | 5.0.0         | consider      |
- Angular Toastr - <Badge type="tip" text="v14.2.1" vertical="middle" /> [(Demo)](https://ngx-toastr.vercel.app/)
- [RxJS](https://rxjs.dev/) - <Badge type="tip" text="v7.5.2" vertical="middle" />
- [Chart.js](https://www.chartjs.org/) - <Badge type="tip" text="v3.5" vertical="middle" /> [(Sample)](https://www.chartjs.org/docs/latest/samples/information.html), [(Awesome Chart.js)](https://github.com/chartjs/awesome)

```bash:no-line-numbers
npm install -g @angular/cli
ng add @angular/material
ng add @ng-bootstrap/ng-bootstrap
```

## Fanatic Programming Tools

### <img src="~@assets/images/IntelliJ_IDEA_Icon.png" alt="drawing" width="20"/> IntelliJ IDEA [(Download)](https://www.jetbrains.com/idea/download)

Useful plugin for IntelliJ IDEA

- GitToolBox
- String Manipulation
- SonarLint
- Lombok

Using <a href="~@assets/styleguides/intellij-java-fanatic-style.xml" download>Fanatic IntelliJ Style Guide</a> based on [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html)

### <img src="~@assets/images/Visual_Studio_Code_icon.png" alt="drawing" width="20"/> Visual Studio Code [(Download)](https://code.visualstudio.com/download)

Useful extensions for vscode

- GitLens — Git supercharged
- Bracket Pair Colorizer 2
- colorize
- Output Colorizer
- Smart Column Indenter
- SonarLint
- String Manipulation
- TODO Highlight
- Visual Studio IntelliCode

### Some other tools

- <img src="~@assets/images/DBeaver_logo.png" alt="drawing" width="20"/> DBeaver Community [(Download)](https://dbeaver.io/download/)
- <img src="~@assets/images/Postman_logo.png" alt="drawing" width="20"/> Postman [(Download)](https://www.postman.com/downloads/)
- <img src="~@assets/images/Mockoon_logo.png" alt="drawing" width="20"/> Mockoon [(Download)](https://mockoon.com/download/)
- <img src="~@assets/images/Jaspersoft_logo.jpg" alt="drawing" width="20"/> Jasper Report Tools Community [(Download)](https://community.jaspersoft.com/project/jaspersoft-studio/releases)

## Reference

- [Google Naming Conventions](https://cloud.google.com/apis/design/naming_convention)
- [Google Style Guide](https://google.github.io/styleguide/)
- [Angular Style Guide](https://angular.io/guide/styleguide)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [BEM - CSS Naming Conventions](http://getbem.com/)
