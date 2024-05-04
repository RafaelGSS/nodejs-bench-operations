## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|90,902,323|97|
|(short string) (true) String#slice and strict comparison|907,760,053|100|
|(long string) (true) String#endsWith|84,561,703|98|
|(long string) (true) String#slice and strict comparison|903,767,701|95|
|(short string) (false) String#endsWith|108,154,576|99|
|(short string) (false) String#slice and strict comparison|906,857,674|99|
|(long string) (false) String#endsWith|98,784,522|98|
|(long string) (false) String#slice and strict comparison|905,373,776|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:22:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":90902323.27760893,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":907760053.027737,"samples":8},{"name":"(long string) (true) String#endsWith","opsSec":84561703.49514078,"samples":9},{"name":"(long string) (true) String#slice and strict comparison","opsSec":903767701.4178658,"samples":8},{"name":"(short string) (false) String#endsWith","opsSec":108154575.81161542,"samples":5},{"name":"(short string) (false) String#slice and strict comparison","opsSec":906857674.249534,"samples":6},{"name":"(long string) (false) String#endsWith","opsSec":98784521.82054663,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":905373775.9333725,"samples":6}]}-->
