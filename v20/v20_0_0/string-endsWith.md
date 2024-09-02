## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|12,104,461|6052231|
|(short string) (true) String#slice and strict comparison|12,006,278|6003140|
|(long string) (true) String#endsWith|11,718,559|5859280|
|(long string) (true) String#slice and strict comparison|12,193,674|6096838|
|(short string) (false) String#endsWith|12,920,039|6460020|
|(short string) (false) String#slice and strict comparison|12,310,269|6155135|
|(long string) (false) String#endsWith|12,298,465|6149233|
|(long string) (false) String#slice and strict comparison|11,701,674|5850838|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:59:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":12104461.522739572,"samples":6052231},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12006278.170492044,"samples":6003140},{"name":"(long string) (true) String#endsWith","opsSec":11718559.41301439,"samples":5859280},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12193674.185635604,"samples":6096838},{"name":"(short string) (false) String#endsWith","opsSec":12920039.247425297,"samples":6460020},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12310269.90507119,"samples":6155135},{"name":"(long string) (false) String#endsWith","opsSec":12298465.351071332,"samples":6149233},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11701674.470177636,"samples":5850838}]}-->
