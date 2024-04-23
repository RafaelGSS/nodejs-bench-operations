## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|81,968,969|96|
|(short string) (true) String#slice and strict comparison|858,776,435|99|
|(long string) (true) String#endsWith|76,621,782|98|
|(long string) (true) String#slice and strict comparison|859,674,470|94|
|(short string) (false) String#endsWith|98,230,553|96|
|(short string) (false) String#slice and strict comparison|857,520,959|96|
|(long string) (false) String#endsWith|90,207,895|98|
|(long string) (false) String#slice and strict comparison|860,472,322|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:53:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":81968969.29435974,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":858776434.7298062,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":76621781.6653141,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":859674469.8027731,"samples":7},{"name":"(short string) (false) String#endsWith","opsSec":98230552.51681283,"samples":5},{"name":"(short string) (false) String#slice and strict comparison","opsSec":857520959.2532463,"samples":7},{"name":"(long string) (false) String#endsWith","opsSec":90207895.32461575,"samples":8},{"name":"(long string) (false) String#slice and strict comparison","opsSec":860472321.9196241,"samples":8}]}-->
