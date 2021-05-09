# Tony Ly’s SDC Engineering Journal and Notes
Contacts:
* [Website/Resume](http://tonyly.com/)
* [GitHub](https://github.com/tonyjly)
* [LinkedIn](https://www.linkedin.com/in/tonyjly/)

### Project Links
* [System Design Capstone Overview](https://learn-2.galvanize.com/cohorts/2596/blocks/101/content_files/System%20Design%20Capstone/introduction-to-system-design-capstone.md)
* [Phase 1: Create the Database](https://learn-2.galvanize.com/cohorts/2596/blocks/101/content_files/System%20Design%20Capstone/phases/phase_1.md)
* [Phase 2: Create the API](https://learn-2.galvanize.com/cohorts/2596/blocks/101/content_files/System%20Design%20Capstone/phases/phase_2.md)
* [Phase 3: Performance Tune the Service](https://learn-2.galvanize.com/cohorts/2596/blocks/101/content_files/System%20Design%20Capstone/phases/phase_3.md)
* [Phase 4: Deploy and Benchmark Initial Performance](https://learn-2.galvanize.com/cohorts/2596/blocks/101/content_files/System%20Design%20Capstone/phases/phase_4.md)
* [Phase 5: Scale the Application](https://learn-2.galvanize.com/cohorts/2596/blocks/101/content_files/System%20Design%20Capstone/phases/phase_5.md)
* [Phase 6: Presentations](https://learn-2.galvanize.com/cohorts/2596/blocks/101/content_files/System%20Design%20Capstone/phases/phase_6.md)

* [Github]()
* [Google Drive]()
* [Trello Template Board]()
* [Miro Board]()

### General Links
* [Code Reviews Checklist](https://learn-2.galvanize.com/cohorts/2596/blocks/94/content_files/Front%20End%20Capstone/exercises/code_reviews.md)
* [Ticketing System](https://learn-2.galvanize.com/cohorts/2596/blocks/94/content_files/Front%20End%20Capstone/exercises/ticketing.md)
* [Git Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) (Atlassian)
* [Recommended Technologies](https://learn-2.galvanize.com/cohorts/2596/blocks/94/content_files/Front%20End%20Capstone/exercises/tech_choices.md)
* [Example Trello Project](https://trello.com/b/FcySKoaf/example-trello-project) (Julian Yuen)
* [Markdown reference](https://commonmark.org/) ([README](https://learn-2.galvanize.com/cohorts/2596/blocks/101/content_files/System%20Design%20Capstone/exercises/writing_readmes.md))
* [Guide to Javascript Date and moment.js](https://www.freecodecamp.org/news/the-ultimate-guide-to-javascript-date-and-moment-js/)
* [Gabe Acevedo IMDB](https://www.imdb.com/name/nm3629799/) (!!)
* [Fireship: Async Await](https://youtu.be/vn3tm0quoqE) (Brenton)
* [The Net Ninja](https://www.youtube.com/c/TheNetNinja/search?query=stream) (Gabe)

### Referenced Links
* [Using COPY in Postgres for Importing Large CSVs](https://www.trineo.com/blog/2018/08/using-copy-in-postgres-for-importing-large-csvs) (Brenton)
* [Import CSV data into PostgreSQL using Node.js](https://bezkoder.com/node-js-csv-postgresql/)
* [How to Be a Kickass New Software Engineer by Richard Gan](https://www.linkedin.com/pulse/how-kickass-new-software-engineer-raymond-gan/) (Eli)
* [Database Indexing with PostgreSQL](https://youtu.be/-qNSXK7s7_w) (hint from Pete)
* Dates
  * [Everything You Need to Know About Date in JavaScript](https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/) (CSS-Tricks)
  * [The Date Constructor](https://tc39.es/ecma262/#sec-date-constructor) (ECMAScript 2022)
  * [Date.parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) (MDN)
* [Turn on query execution time](https://www.postgresqltutorial.com/psql-commands/) (Brenton, #14)
* [PostgreSQL Cheatsheet](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546) #1
* [PostgreSQL Cheatsheet](https://www.postgresqltutorial.com/postgresql-cheat-sheet/) #2

---

### Common Commands

Spin up PostgreSQL in a Docker container:
```
sudo docker run --name postgresql-container -p 5432:5432 -e POSTGRES_PASSWORD=student -d postgres
```

### PostgreSQL Commands

Enter PSQL Terminal
```
psql -d reviews -U tony -W
```

Query
```sql
SELECT * FROM reviews;
```

### Setup

[pgAdmin4](https://www.pgadmin.org/download/pgadmin-4-apt)

---

### 5/3/2021  (SDC Start)
Notes
* Phase 1:  Create the Database
  * Select two DBMS technologies (one RDBMS, one NoSQL DBMS)
  * Example:  [Amazon System Design Interview: Design Parking Garage](https://www.youtube.com/watch?v=NtMvNh0WFVM&ab_channel=Exponent)
* [Reviews Module API Information](https://learn-2.galvanize.com/cohorts/2596/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/reviews.md)
* Best Practices
  * Strategies
    * We can write everything in Javascript, OR
    * We can have the database do heavy lifting for us
  * Josh recommends Postgres
    * npm packages for Postgres are not broken like MySQL
  * Do not use an ORM
    * slows things down
    * main reason: because we should practice SQL to learn it better
* Terms
  * “Web-Scale”
  * “Speed is a feature” -- Google
  * Database Normalization ([guru99](https://www.guru99.com/database-normalization.html))
    * generally want to normalize to 3NF
    * there’s generally a downside to normalization
  * Database Denormalization
    * trade-off, allow for more space complexity, to achieve more performant queries

##### Database Data Modeling (1st iteration)

![](images/2021-05-08-22-22-00.png)