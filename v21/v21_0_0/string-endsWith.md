## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|310,204,459|98|
|(short string) (true) String#slice and strict comparison|909,077,317|96|
|(long string) (true) String#endsWith|195,392,463|98|
|(long string) (true) String#slice and strict comparison|908,089,228|98|
|(short string) (false) String#endsWith|871,139,329|99|
|(short string) (false) String#slice and strict comparison|909,205,212|98|
|(long string) (false) String#endsWith|869,640,530|98|
|(long string) (false) String#slice and strict comparison|909,072,029|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:27:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":310204459.4331446,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":909077316.7110382,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":195392463.04741085,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":908089228.1734985,"samples":6},{"name":"(short string) (false) String#endsWith","opsSec":871139328.9704391,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":909205212.2710394,"samples":6},{"name":"(long string) (false) String#endsWith","opsSec":869640530.3431314,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":909072029.4465544,"samples":6}]}-->
