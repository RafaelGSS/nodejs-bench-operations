## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|79,510,176|94|
|(short string) (true) String#slice and strict comparison|858,699,496|97|
|(long string) (true) String#endsWith|76,541,813|96|
|(long string) (true) String#slice and strict comparison|856,809,349|100|
|(short string) (false) String#endsWith|98,564,065|98|
|(short string) (false) String#slice and strict comparison|855,783,881|97|
|(long string) (false) String#endsWith|89,643,955|97|
|(long string) (false) String#slice and strict comparison|857,432,146|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":79510176.40345785,"samples":4},{"name":"(short string) (true) String#slice and strict comparison","opsSec":858699496.2970402,"samples":8},{"name":"(long string) (true) String#endsWith","opsSec":76541813.07673933,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":856809349.3634024,"samples":6},{"name":"(short string) (false) String#endsWith","opsSec":98564065.12754272,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":855783881.3890562,"samples":6},{"name":"(long string) (false) String#endsWith","opsSec":89643955.11490618,"samples":5},{"name":"(long string) (false) String#slice and strict comparison","opsSec":857432145.9887311,"samples":6}]}-->
