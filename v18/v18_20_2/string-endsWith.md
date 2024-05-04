## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|90,659,154|97|
|(short string) (true) String#slice and strict comparison|907,636,290|93|
|(long string) (true) String#endsWith|84,471,572|94|
|(long string) (true) String#slice and strict comparison|903,326,962|97|
|(short string) (false) String#endsWith|108,273,025|96|
|(short string) (false) String#slice and strict comparison|907,191,188|98|
|(long string) (false) String#endsWith|98,926,590|100|
|(long string) (false) String#slice and strict comparison|904,411,919|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:21:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":90659154.158951,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":907636290.0104052,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":84471571.77589563,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":903326961.9027082,"samples":6},{"name":"(short string) (false) String#endsWith","opsSec":108273024.87154545,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":907191187.6487288,"samples":7},{"name":"(long string) (false) String#endsWith","opsSec":98926589.92135537,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":904411919.2345853,"samples":6}]}-->
