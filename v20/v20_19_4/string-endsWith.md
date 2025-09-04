## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|54,409,992|27205002|
|(short string) (true) String#slice and strict comparison|63,724,117|31862070|
|(long string) (true) String#endsWith|50,303,451|25151730|
|(long string) (true) String#slice and strict comparison|59,119,080|29560123|
|(short string) (false) String#endsWith|58,172,252|29088653|
|(short string) (false) String#slice and strict comparison|62,331,291|31167184|
|(long string) (false) String#endsWith|54,883,034|27441533|
|(long string) (false) String#slice and strict comparison|56,962,030|28481040|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:39:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":27205002,"opsSec":54409992.79154149},{"name":"(short string) (true) String#slice and strict comparison","samples":31862070,"opsSec":63724117.6965588},{"name":"(long string) (true) String#endsWith","samples":25151730,"opsSec":50303451.8508408},{"name":"(long string) (true) String#slice and strict comparison","samples":29560123,"opsSec":59119080.644682325},{"name":"(short string) (false) String#endsWith","samples":29088653,"opsSec":58172252.34374989},{"name":"(short string) (false) String#slice and strict comparison","samples":31167184,"opsSec":62331291.07814721},{"name":"(long string) (false) String#endsWith","samples":27441533,"opsSec":54883034.05807418},{"name":"(long string) (false) String#slice and strict comparison","samples":28481040,"opsSec":56962030.10126162}]}-->
