## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|129,346,336|85|
|(short string) (true) String#slice and strict comparison|144,503,326|83|
|(long string) (true) String#startsWith|94,155,953|87|
|(long string) (true) String#slice and strict comparison|146,235,696|81|
|(short string) (false) String#startsWith|143,286,613|87|
|(short string) (false) String#slice and strict comparison|145,033,177|82|
|(long string) (false) String#startsWith|142,590,516|83|
|(long string) (false) String#slice and strict comparison|147,597,683|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 01:54:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":129346336.01311669,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":144503326.18499938,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":94155953.29849324,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":146235696.3879777,"samples":5},{"name":"(short string) (false) String#startsWith","opsSec":143286612.98499513,"samples":4},{"name":"(short string) (false) String#slice and strict comparison","opsSec":145033177.11918664,"samples":4},{"name":"(long string) (false) String#startsWith","opsSec":142590515.61231717,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":147597683.07022327,"samples":6}]}-->
