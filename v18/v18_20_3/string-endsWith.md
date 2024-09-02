## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|12,408,875|6204438|
|(short string) (true) String#slice and strict comparison|12,587,205|6293603|
|(long string) (true) String#endsWith|12,313,079|6156540|
|(long string) (true) String#slice and strict comparison|12,003,973|6001987|
|(short string) (false) String#endsWith|12,752,433|6376217|
|(short string) (false) String#slice and strict comparison|12,919,679|6459840|
|(long string) (false) String#endsWith|12,582,074|6291038|
|(long string) (false) String#slice and strict comparison|12,468,376|6234189|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:52:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":12408875.038993927,"samples":6204438},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12587205.65272529,"samples":6293603},{"name":"(long string) (true) String#endsWith","opsSec":12313079.66460005,"samples":6156540},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12003973.669666016,"samples":6001987},{"name":"(short string) (false) String#endsWith","opsSec":12752433.71857139,"samples":6376217},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12919679.188439434,"samples":6459840},{"name":"(long string) (false) String#endsWith","opsSec":12582074.993332593,"samples":6291038},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12468376.509194655,"samples":6234189}]}-->
