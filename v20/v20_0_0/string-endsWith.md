## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|82,171,468|93|
|(short string) (true) String#slice and strict comparison|822,450,393|95|
|(long string) (true) String#endsWith|76,497,659|97|
|(long string) (true) String#slice and strict comparison|821,093,925|97|
|(short string) (false) String#endsWith|98,454,064|98|
|(short string) (false) String#slice and strict comparison|821,892,558|96|
|(long string) (false) String#endsWith|89,661,415|96|
|(long string) (false) String#slice and strict comparison|823,806,265|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:53:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":82171468.36274245,"samples":4},{"name":"(short string) (true) String#slice and strict comparison","opsSec":822450392.963463,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":76497659.49094842,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":821093924.9411333,"samples":6},{"name":"(short string) (false) String#endsWith","opsSec":98454063.89752983,"samples":5},{"name":"(short string) (false) String#slice and strict comparison","opsSec":821892557.5747757,"samples":6},{"name":"(long string) (false) String#endsWith","opsSec":89661414.56899679,"samples":5},{"name":"(long string) (false) String#slice and strict comparison","opsSec":823806265.4628236,"samples":6}]}-->
