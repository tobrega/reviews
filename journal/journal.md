# Tony Ly’s SDC Engineering Journal and Notes
### Contacts:
* [Website/Resume](http://tonyly.com/)
* [GitHub](https://github.com/tonyjly)
* [LinkedIn](https://www.linkedin.com/in/tonyjly/)

### Project Links
* [System Design Capstone Overview](https://learn-2.galvanize.com/cohorts/2596/blocks/101/content_files/System%20Design%20Capstone/introduction-to-system-design-capstone.md)
* Phases
  * [Phase 1: Create the Database](https://learn-2.galvanize.com/cohorts/2596/blocks/101/content_files/System%20Design%20Capstone/phases/phase_1.md)
  * [Phase 2: Create the API](https://learn-2.galvanize.com/cohorts/2596/blocks/101/content_files/System%20Design%20Capstone/phases/phase_2.md)
  * [Phase 3: Performance Tune the Service](https://learn-2.galvanize.com/cohorts/2596/blocks/101/content_files/System%20Design%20Capstone/phases/phase_3.md)
  * [Phase 4: Deploy and Benchmark Initial Performance](https://learn-2.galvanize.com/cohorts/2596/blocks/101/content_files/System%20Design%20Capstone/phases/phase_4.md)
  * [Phase 5: Scale the Application](https://learn-2.galvanize.com/cohorts/2596/blocks/101/content_files/System%20Design%20Capstone/phases/phase_5.md)
  * [Phase 6: Presentations](https://learn-2.galvanize.com/cohorts/2596/blocks/101/content_files/System%20Design%20Capstone/phases/phase_6.md)

* [Github](https://github.com/TOBREGA)
* [Google Drive](https://drive.google.com/drive/folders/1jpWqFmw1oKkMOHSlKW58yRasG5LYd27_)
* [Trello Template Board](https://miro.com/app/board/o9J_lGGB1GE=/)
* [Miro Board](https://miro.com/app/board/o9J_lGGB1GE=/)

### General Links
* [Code Reviews Checklist](https://learn-2.galvanize.com/cohorts/2596/blocks/94/content_files/Front%20End%20Capstone/exercises/code_reviews.md)
* [Ticketing System](https://learn-2.galvanize.com/cohorts/2596/blocks/94/content_files/Front%20End%20Capstone/exercises/ticketing.md)
* [Git Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) (Atlassian)
* [Recommended Technologies](https://learn-2.galvanize.com/cohorts/2596/blocks/94/content_files/Front%20End%20Capstone/exercises/tech_choices.md)
* [Example Trello Project](https://trello.com/b/FcySKoaf/example-trello-project) (Julian Yuen)
* [Markdown Reference](https://commonmark.org/) (CommonMark) ([README](https://learn-2.galvanize.com/cohorts/2596/blocks/101/content_files/System%20Design%20Capstone/exercises/writing_readmes.md))
* [Markdown Tables Generator](https://tableconvert.com/) (TableConvert)
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

## 5/3/2021  (W8D1, SDC Start)
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

#### Database Data Modeling (1st iteration)


Data Model for Product Overview (Brenton)
![](images/2021-05-08-22-22-00.png)


Data Model for Reviews (Tony)
![](images/2021-05-08-22-26-10.png)


Data Model for Product Q&A (Gabe)
![](images/2021-05-08-22-27-09.png)

---

## 5/4/2021  (W8D2; May the 4th Be With You)

Notes
* Adjustments to our data models

#### Database Data Modeling (2nd iteration)


Data Model for Product Overview (Brenton)
![](images/2021-05-08-22-29-21.png)


Data Model for Reviews (Tony)
![](images/2021-05-08-22-31-12.png)


Data Model for Product Q&A (Gabe)
![](images/2021-05-08-22-31-36.png)


#### Initial repo setup
* [Configure It Out!](https://www.notion.so/Configure-It-Out-b5917c1616b5406b95fa10e23b056624) (Brenton)
* npm [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
* npm [postgres.js](https://www.npmjs.com/package/postgres)
* Commands
  * `npx install-peerdeps --dev eslint-config-airbnb`
  * `npm install postgres`
  * `npm install --save-dev jest`

#### Running PostgreSQL
`sudo -u postgres psql`, or
`sudo su - postgres`, or
`psql -d reviews -U tony -W`

#### Install Docker
* [Please-Contain-Yourself](https://github.com/dylanlrrb/Please-Contain-Yourself) (Josh, Docker Lecture)

#### Handling Static data
* Received revised static data in csv format from Josh
* ETL
  * [Import CSV data to PostgreSQL using pg](https://bezkoder.com/node-js-csv-postgresql/)
  * [Using COPY in Postgres for Importing Large CSVs](https://www.trineo.com/blog/2018/08/using-copy-in-postgres-for-importing-large-csvs) (Brenton)

---

## 5/5/2021  (W8D3)

Notes
* importing csv data into postgres
* running pgAdmin4 on a Docker container ([Dave Page](https://www.youtube.com/watch?v=RUeTKUf6JV0&ab_channel=EDB))

Spinning up PostgreSQL on Docker
```
sudo docker run --name postgresql-container -p 5432:5432 -e POSTGRES_PASSWORD=student -d postgres
```

Spinning up pgAdmin4 on Docker
```
sudo docker pull dpage/pgadmin4
sudo docker run -p 80:80 \
   -e 'PGADMIN_DEFAULT_EMAIL=user@domain.com' \
   -e 'PGADMIN_DEFAULT_PASSWORD=student' \
   -d dpage/pgadmin4
```

Josh's MySQL Import (will need some adjustments for PostgreSQL)
```sql
LOAD DATA LOCAL INFILE '/Users/path/questions.csv' INTO TABLE questions FIELDS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' LINES TERMINATED BY '\n' IGNORE 1 ROWS (id, product_id, body, @var1, asker_name, asker_email, reported, helpfulness) SET date_written=FROM_UNIXTIME(@var1/1000);
```

Result when trying to run index.js to import csv (~2.0 GB) into postgres via node
* Appears to be error out due to running out of memory
```
tony@pop-os:~/Nextcloud/HR-SEA16/sdc/tobrega-reviews$ node db/index.js

<--- Last few GCs --->

[22479:0x6062fa0]   200919 ms: Mark-sweep (reduce) 4093.9 (4101.1) -> 4092.6 (4104.2) MB, 1833.7 / 0.0 ms  (+ 0.1 ms in 347 steps since start of marking, biggest step 0.0 ms, walltime since start of marking 1977 ms) (average mu = 0.453, current mu = 0.144[22479:0x6062fa0]   202782 ms: Mark-sweep (reduce) 4093.7 (4103.7) -> 4093.5 (4104.2) MB, 1859.2 / 0.0 ms  (average mu = 0.280, current mu = 0.002) allocation failure scavenge might not succeed


<--- JS stacktrace --->

FATAL ERROR: MarkCompactCollector: young object promotion failed Allocation failed - JavaScript heap out of memory
 1: 0xa04200 node::Abort() [node]
 2: 0x94e4e9 node::FatalError(char const*, char const*) [node]
 3: 0xb7978e v8::Utils::ReportOOMFailure(v8::internal::Isolate*, char const*, bool) [node]
 4: 0xb79b07 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [node]
 5: 0xd34395  [node]
 6: 0xd64f2e v8::internal::EvacuateNewSpaceVisitor::Visit(v8::internal::HeapObject, int) [node]
 7: 0xd70f66 v8::internal::FullEvacuator::RawEvacuatePage(v8::internal::MemoryChunk*, long*) [node]
 8: 0xd5d14f v8::internal::Evacuator::EvacuatePage(v8::internal::MemoryChunk*) [node]
 9: 0xd5d3c8 v8::internal::PageEvacuationTask::RunInParallel(v8::internal::ItemParallelJob::Task::Runner) [node]
10: 0xd4fca9 v8::internal::ItemParallelJob::Run() [node]
11: 0xd72ec0 void v8::internal::MarkCompactCollectorBase::CreateAndExecuteEvacuationTasks<v8::internal::FullEvacuator, v8::internal::MarkCompactCollector>(v8::internal::MarkCompactCollector*, v8::internal::ItemParallelJob*, v8::internal::MigrationObserver*, long) [node]
12: 0xd7375c v8::internal::MarkCompactCollector::EvacuatePagesInParallel() [node]
13: 0xd73925 v8::internal::MarkCompactCollector::Evacuate() [node]
14: 0xd85911 v8::internal::MarkCompactCollector::CollectGarbage() [node]
15: 0xd41c38 v8::internal::Heap::MarkCompact() [node]
16: 0xd43728 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [node]
17: 0xd46b6c v8::internal::Heap::AllocateRawWithRetryOrFailSlowPath(int, v8::internal::AllocationType, v8::internal::AllocationOrigin, v8::internal::AllocationAlignment) [node]
18: 0xd1524b v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationType, v8::internal::AllocationOrigin) [node]
19: 0x105b23f v8::internal::Runtime_AllocateInYoungGeneration(int, unsigned long*, v8::internal::Isolate*) [node]
20: 0x1401219  [node]
Aborted (core dumped)
```

---

## 5/6/2021  (W8D4)

#### Lecture:  [Performance Testing Your Service](https://docs.google.com/presentation/d/e/2PACX-1vQ1n8x8MWz5So5J3PqTptxxG2ZTYTGuUmzbTzsKZSnL-nYBYEVQNHmuBspjX_CBZobvgHRQ0n5ExCkR/embed?start=false&loop=false&delayms=3000&slide=id.g2a3378dcb8_0_0)
* **If we have queries executing <50 ms, we set ourselves up for success down the road**
* We’re deploying our databases on a t2 micro on AWS
* A response time of 2000 ms is among the upper limit of what we would want it to be
* Josh recommends introducing Docker during testing performance or service deployment
* Most cloud-based computing platforms already have Docker built into the services
  * AWS already has their own type of containerization
* Tests
  * Performance testing
  * Stress testing
* Stress testing
  * Stress testing tools
    * Httperf, Jmeter, Artillery (all garbage)
    * K6 (**use this**)
  * Cloud Tools
    * Loader.io (more popular)
    * Flood.io
  * We don’t stress test our static endpoints (index, App, etc)
    * Because they are not representative of our site
      ![](images/2021-05-08-22-42-53.png)
  * We will stress test our API endpoints

  * Metrics to collect

| Metric | Description | Goal |
|---|---|---|
| Response time (aka latency) | How fast does your API respond? | < 2000 ms under load |
| Throughput | How many requests can you process per second (RPS/QPS/RPM) | 100 RPS on EC2 |
| Error rate | How often does a response generate an error? | < 1% under load |

* Metrics
  * New Relic (free 2 week trial) (don’t sign up until after we’re ready to do stress testing)
  * statsD + Grafana
  * ELK stack

Notes
* Rating column cannot be null → b/c it’s a boolean
* Preceding column, `body`, has comma
* Unify dates
	* Dates in `reviews` come in three formats:
      ```js
      // Unix timestamp
      1602721790544

      // Date-time-string (ISOstring)
      2021-01-17T03:01:59.883Z

      // Date
      Wed Apr 21 2021 22:39:42 GMT-0400 (Eastern Daylight Time)
      ```
  * May use `Date.parse()` and `new Date()` constructor to handle date formats
    ```js
    // unify dates to timestamps
    if (newRow.date.length > 15) {
      newRow.date = Date.parse(newRow.date)
    }
    ```
  * Now that the 3 different date formats are all unified to be unix timestamps, they will be easier to work with

* Finished tonight
  * Clean up code via `prepareReviews.js`:
    ```js
    5700000 // lines processed
    CSV file successfully processed in 95.318 seconds
    ```

  * Load the data via postgres db schema:
    ```js
    reviews=# \i /home/tony/Nextcloud/HR-SEA16/sdc/tobrega-reviews/db/schema_reviews.sql
    DROP TABLE
    CREATE TABLE
    COPY 5760707
    reviews=#
    ```

  * Viewed table via PostgreSQL query via pgAdmin4.
  * Data looks as I had expected.
  * Missing columns are handled.
  * Dates are unified to a single date format (unix timestamp).
  * Plan to follow a similar format for the other csv data sources.

  * Shoutout to Brenton for sharing this
    * Using the JS date constructor on different date formats

      ![](images/2021-05-08-23-05-21.png)


---


## 5/7/2021  (W8D5)

Notes
* K6 is one of the best local stress testing tools available
* Josh recommends not using Docker for containerization during SDC
  * Reason is we would use containerization for the purpose of horizontal scaling
  * However, most cloud platforms already have containerization solutions

Output from running `prepareCharacteristics.js`:
```js
{
 "id": {
   "number": 3339442
 },
 "productId": {
   "number": 3339442
 },
 "name": {
   "Fit": 642780,
   "Length": 642642,
   "Comfort": 770801,
   "Quality": 984999,
   "Size": 128256,
   "Width": 128222,
   "null": 41742
 }
}
CSV file successfully processed in 13.056 seconds
```

Last row, line number:  `3339442`
* Suggests that import fully loaded the entire csv into db

Last row, `id`:  `3347679`


---

## 5/8/2021  (W8D6)

`EXPLAIN ANALYZE`
* displays the execution plan and actual run time statistics, including:
  * planning time (in ms)
  * execution time (in ms)
  * total number of rows it actually returned
* notes
  * the current implementation of `EXPLAIN ANALYZE` can add profiling overhead to query execution
  * this overhead can add some time to the actual query time


Using `EXPLAIN ANALYZE` to show query statistics:

![](images/2021-05-08-23-08-18.png)

![](images/2021-05-08-23-08-40.png)

To show a certain range of rows:
```sql
SELECT * FROM photos LIMIT 10 OFFSET 90;
```
![](images/2021-05-08-23-09-05.png)


Date Breakdown (Brenton):

```js
let longDate = 'Wed Sep 02 2020 21:14:32 GMT-0700 (Pacific Daylight Time)';
let isoDate = '2021-04-03T10:33:45.476Z'
let unixTime = 1597117493485;
let times = [longDate, isoDate, unixTime].map((date) => {
  return new Date(date).toISOString();
});
console.log(JSON.stringify(times, null, 2));

// Output:
// [
//   "2020-09-03T04:14:32.000Z",
//   "2021-04-03T10:33:45.476Z",
//   "2020-08-11T03:44:53.485Z"
// ]
```

* Issue:
  * Observing an issue where a row is inserted into an unexpected location
  * Even though the data is not in this order in the data source

    ![postgres](images/2021-05-08-23-49-43.png) ![sublimetext](images/2021-05-08-23-52-32.png)


---


## 5/10/2021  (W9D1)

### Notes
- AM standup

Changed how `prepareReviews.js` handles dates
- In the source data file, we start off with three different date formats
  - unix timestamp
  - ISO date-string
  - full date-string
- Logic changed
  1. attempt conversion of date to number (signifying a unix timestamp), then
  2. use the `new Date()` constructor on the number, and then
  3. convert date to ISO string by chaining `.toISOString()` to the date constructor
- If the date is a number, it will construct a new date
- Otherwise, it will return the original full date
- Now, all dates will be in either
  1. ISO date-string
  2. full date-string
- Once the dates are in these formats with the date constructor, I convert it to ISO string format, which is the [recommended format that PostgreSQL accepts](https://www.postgresql.org/docs/9.1/datatype-datetime.html)
- Reference: [The Ultimate Guide to PostgreSQL Date By Examples](https://www.postgresqltutorial.com/postgresql-date/#:~:text=Introduction%20to%20the%20PostgreSQL%20DATE%20data%20type&text=The%20lowest%20and%20highest%20values,%2C%202000%2D12%2D31.) (PostgreSQL Tutorial)

Running `prepareReviews.js`:
```
5700000 rows processed
CSV file successfully processed in 112.221 seconds
```
Import schema
```
reviews=# \i /home/tony/Nextcloud/HR-SEA16/sdc/tobrega-reviews/db/schema.sql
DROP TABLE
psql:/home/tony/Nextcloud/HR-SEA16/sdc/tobrega-reviews/db/schema.sql:3: NOTICE:  table "reviews" does not exist, skipping
DROP TABLE
psql:/home/tony/Nextcloud/HR-SEA16/sdc/tobrega-reviews/db/schema.sql:4: NOTICE:  table "characteristics" does not exist, skipping
DROP TABLE
psql:/home/tony/Nextcloud/HR-SEA16/sdc/tobrega-reviews/db/schema.sql:5: NOTICE:  table "photos" does not exist, skipping
DROP TABLE
CREATE TABLE
CREATE TABLE
CREATE TABLE
COPY 5760707
COPY 3339442
COPY 2735823
reviews=#
```

Querying the database shows that our data imported successfully:

![](images/2021-05-10-12-31-21.png)


Querying entire `reviews` table:
* executes within 2323 ms

  ![](images/2021-05-10-12-19-11.png)


Querying `reviews` table, fetching first 10 rows only:
* executes within 0.279 ms

  ![](images/2021-05-10-12-18-47.png)

