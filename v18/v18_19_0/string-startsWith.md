## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|215,942,905|93|
|(short string) (true) String#slice and strict comparison|814,334,718|96|
|(long string) (true) String#startsWith|133,450,144|97|
|(long string) (true) String#slice and strict comparison|806,285,646|98|
|(short string) (false) String#startsWith|429,417,106|91|
|(short string) (false) String#slice and strict comparison|814,009,093|97|
|(long string) (false) String#startsWith|328,767,039|96|
|(long string) (false) String#slice and strict comparison|810,067,843|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":215942904.84748158,"samples":8},{"name":"(short string) (true) String#slice and strict comparison","opsSec":814334718.4560548,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":133450144.13485618,"samples":8},{"name":"(long string) (true) String#slice and strict comparison","opsSec":806285646.229645,"samples":7},{"name":"(short string) (false) String#startsWith","opsSec":429417105.5987583,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":814009093.1996791,"samples":6},{"name":"(long string) (false) String#startsWith","opsSec":328767038.75601995,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":810067842.5928112,"samples":6}]}-->
