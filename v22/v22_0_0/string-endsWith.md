## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,676,256|7338129|
|(short string) (true) String#slice and strict comparison|13,109,009|6554505|
|(long string) (true) String#endsWith|13,513,486|6756744|
|(long string) (true) String#slice and strict comparison|12,424,728|6212365|
|(short string) (false) String#endsWith|14,836,227|7418114|
|(short string) (false) String#slice and strict comparison|12,700,771|6350386|
|(long string) (false) String#endsWith|13,955,706|6977854|
|(long string) (false) String#slice and strict comparison|12,508,928|6254465|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:46:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14676256.708577283,"samples":7338129},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13109009.344470147,"samples":6554505},{"name":"(long string) (true) String#endsWith","opsSec":13513486.134989422,"samples":6756744},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12424728.757609691,"samples":6212365},{"name":"(short string) (false) String#endsWith","opsSec":14836227.821916413,"samples":7418114},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12700771.822021134,"samples":6350386},{"name":"(long string) (false) String#endsWith","opsSec":13955706.102081003,"samples":6977854},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12508928.323958853,"samples":6254465}]}-->
