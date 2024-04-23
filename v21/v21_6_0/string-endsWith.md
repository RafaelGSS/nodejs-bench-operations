## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|276,696,945|95|
|(short string) (true) String#slice and strict comparison|817,331,994|96|
|(long string) (true) String#endsWith|172,474,302|96|
|(long string) (true) String#slice and strict comparison|814,297,437|95|
|(short string) (false) String#endsWith|777,414,790|96|
|(short string) (false) String#slice and strict comparison|816,464,828|95|
|(long string) (false) String#endsWith|777,595,117|96|
|(long string) (false) String#slice and strict comparison|817,326,188|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:53:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":276696945.46437174,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":817331994.2625623,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":172474302.34546503,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":814297437.0316592,"samples":8},{"name":"(short string) (false) String#endsWith","opsSec":777414789.880812,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":816464827.7652367,"samples":7},{"name":"(long string) (false) String#endsWith","opsSec":777595117.262578,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":817326188.4945211,"samples":7}]}-->
