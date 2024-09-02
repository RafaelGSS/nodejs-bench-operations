## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,828,985|7414493|
|(short string) (true) String#slice and strict comparison|13,235,751|6617876|
|(long string) (true) String#endsWith|14,000,313|7000157|
|(long string) (true) String#slice and strict comparison|12,793,747|6396874|
|(short string) (false) String#endsWith|15,188,186|7594094|
|(short string) (false) String#slice and strict comparison|12,887,299|6443650|
|(long string) (false) String#endsWith|14,677,784|7338893|
|(long string) (false) String#slice and strict comparison|11,978,702|5989352|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:02:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14828985.94061628,"samples":7414493},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13235751.603003973,"samples":6617876},{"name":"(long string) (true) String#endsWith","opsSec":14000313.467615284,"samples":7000157},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12793747.770062841,"samples":6396874},{"name":"(short string) (false) String#endsWith","opsSec":15188186.390132809,"samples":7594094},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12887299.768165426,"samples":6443650},{"name":"(long string) (false) String#endsWith","opsSec":14677784.884542651,"samples":7338893},{"name":"(long string) (false) String#slice and strict comparison","opsSec":11978702.921734737,"samples":5989352}]}-->
