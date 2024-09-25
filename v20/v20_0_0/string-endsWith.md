## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|12,101,669|6050835|
|(short string) (true) String#slice and strict comparison|12,303,487|6151744|
|(long string) (true) String#endsWith|12,184,005|6092003|
|(long string) (true) String#slice and strict comparison|12,218,985|6109493|
|(short string) (false) String#endsWith|12,588,913|6294457|
|(short string) (false) String#slice and strict comparison|12,460,160|6230081|
|(long string) (false) String#endsWith|12,040,765|6020383|
|(long string) (false) String#slice and strict comparison|11,631,452|5815727|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:40:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":12101669.67026855,"samples":6050835},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12303487.180853654,"samples":6151744},{"name":"(long string) (true) String#endsWith","opsSec":12184005.656405587,"samples":6092003},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12218985.97186909,"samples":6109493},{"name":"(short string) (false) String#endsWith","opsSec":12588913.322145607,"samples":6294457},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12460160.593543224,"samples":6230081},{"name":"(long string) (false) String#endsWith","opsSec":12040765.78074706,"samples":6020383},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11631452.331601022,"samples":5815727}]}-->
