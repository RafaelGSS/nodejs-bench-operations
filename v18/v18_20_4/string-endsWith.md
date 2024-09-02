## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|12,045,954|6022978|
|(short string) (true) String#slice and strict comparison|12,081,236|6040619|
|(long string) (true) String#endsWith|11,739,042|5869522|
|(long string) (true) String#slice and strict comparison|11,837,242|5918622|
|(short string) (false) String#endsWith|12,079,039|6039520|
|(short string) (false) String#slice and strict comparison|12,483,546|6241774|
|(long string) (false) String#endsWith|12,141,296|6070649|
|(long string) (false) String#slice and strict comparison|12,163,741|6081871|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:53:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":12045954.279460024,"samples":6022978},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12081236.906261401,"samples":6040619},{"name":"(long string) (true) String#endsWith","opsSec":11739042.958625533,"samples":5869522},{"name":"(long string) (true) String#slice and strict comparison","opsSec":11837242.952251328,"samples":5918622},{"name":"(short string) (false) String#endsWith","opsSec":12079039.31265665,"samples":6039520},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12483546.742509248,"samples":6241774},{"name":"(long string) (false) String#endsWith","opsSec":12141296.442781363,"samples":6070649},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12163741.17751526,"samples":6081871}]}-->
