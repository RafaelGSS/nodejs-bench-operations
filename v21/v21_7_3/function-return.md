## Function return

|name|ops/sec|samples|
|-|-|-|
|Function returning null|1,525,307|762654|
|Function returning explicitly undefined|1,490,092|745047|
|Function returning implicitly undefined|1,534,001|767001|
|Function returning string|1,510,718|755361|
|Function returning integer|1,526,927|763465|
|Function returning float|1,515,360|757681|
|Function returning functions|1,472,369|736185|
|Function returning arrow functions|1,495,257|747629|
|Function returning empty object|1,523,694|761848|
|Function returning empty array|1,474,492|737247|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 20:13:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Function returning null","opsSec":1525307.8291665362,"samples":762654},{"name":"Function returning explicitly undefined","opsSec":1490092.1820889171,"samples":745047},{"name":"Function returning implicitly undefined","opsSec":1534001.1961852831,"samples":767001},{"name":"Function returning string","opsSec":1510718.7428855943,"samples":755361},{"name":"Function returning integer","opsSec":1526927.9478149205,"samples":763465},{"name":"Function returning float","opsSec":1515360.8968150525,"samples":757681},{"name":"Function returning functions","opsSec":1472369.0311834312,"samples":736185},{"name":"Function returning arrow functions","opsSec":1495257.7607563818,"samples":747629},{"name":"Function returning empty object","opsSec":1523694.549440502,"samples":761848},{"name":"Function returning empty array","opsSec":1474492.3367706113,"samples":737247}]}-->
