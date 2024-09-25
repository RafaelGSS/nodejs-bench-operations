## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|11,871,050|5935567|
|(short string) (true) String#slice and strict comparison|12,191,789|6095895|
|(long string) (true) String#endsWith|11,746,269|5873135|
|(long string) (true) String#slice and strict comparison|11,886,005|5943003|
|(short string) (false) String#endsWith|11,900,151|5950076|
|(short string) (false) String#slice and strict comparison|12,835,016|6417509|
|(long string) (false) String#endsWith|11,970,854|5985428|
|(long string) (false) String#slice and strict comparison|12,275,549|6137775|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:35:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":11871050.822697347,"samples":5935567},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12191789.874010589,"samples":6095895},{"name":"(long string) (true) String#endsWith","opsSec":11746269.392547788,"samples":5873135},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11886005.469274053,"samples":5943003},{"name":"(short string) (false) String#endsWith","opsSec":11900151.082514916,"samples":5950076},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12835016.71542469,"samples":6417509},{"name":"(long string) (false) String#endsWith","opsSec":11970854.3230531,"samples":5985428},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12275549.981525086,"samples":6137775}]}-->
