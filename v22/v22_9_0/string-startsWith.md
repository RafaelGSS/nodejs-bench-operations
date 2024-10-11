## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|127,976,366|63988540|
|(short string) (true) String#slice and strict comparison|58,354,959|29177750|
|(long string) (true) String#startsWith|64,522,356|32261201|
|(long string) (true) String#slice and strict comparison|53,236,320|26621299|
|(short string) (false) String#startsWith|91,437,261|45718636|
|(short string) (false) String#slice and strict comparison|57,466,295|28734690|
|(long string) (false) String#startsWith|87,468,950|43745945|
|(long string) (false) String#slice and strict comparison|52,479,757|26239879|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:42:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":127976366.14782964,"samples":63988540},{"name":"(short string) (true) String#slice and strict comparison","opsSec":58354959.16623846,"samples":29177750},{"name":"(long string) (true) String#startsWith","opsSec":64522356.06008248,"samples":32261201},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53236320.58602178,"samples":26621299},{"name":"(short string) (false) String#startsWith","opsSec":91437261.57615218,"samples":45718636},{"name":"(short string) (false) String#slice and strict comparison","opsSec":57466295.20927317,"samples":28734690},{"name":"(long string) (false) String#startsWith","opsSec":87468950.56796195,"samples":43745945},{"name":"(long string) (false) String#slice and strict comparison","opsSec":52479757.58016194,"samples":26239879}]}-->
