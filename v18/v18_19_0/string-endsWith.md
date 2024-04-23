## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|81,661,662|96|
|(short string) (true) String#slice and strict comparison|820,752,827|94|
|(long string) (true) String#endsWith|75,847,212|97|
|(long string) (true) String#slice and strict comparison|817,748,924|97|
|(short string) (false) String#endsWith|97,618,627|99|
|(short string) (false) String#slice and strict comparison|820,399,070|99|
|(long string) (false) String#endsWith|89,177,555|94|
|(long string) (false) String#slice and strict comparison|818,503,272|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:53:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":81661662.31872088,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":820752826.923517,"samples":7},{"name":"(long string) (true) String#endsWith","opsSec":75847211.93330799,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":817748924.323049,"samples":8},{"name":"(short string) (false) String#endsWith","opsSec":97618626.79054876,"samples":8},{"name":"(short string) (false) String#slice and strict comparison","opsSec":820399069.668988,"samples":8},{"name":"(long string) (false) String#endsWith","opsSec":89177555.34565848,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":818503272.2615787,"samples":7}]}-->
