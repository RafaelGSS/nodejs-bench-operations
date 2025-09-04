## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|84,065,342|42144791|
|(short string) (true) String#slice and strict comparison|55,897,946|27956824|
|(long string) (true) String#startsWith|66,029,924|33046822|
|(long string) (true) String#slice and strict comparison|50,473,131|25236700|
|(short string) (false) String#startsWith|90,262,822|45143128|
|(short string) (false) String#slice and strict comparison|56,113,808|28061909|
|(long string) (false) String#startsWith|82,230,795|41116622|
|(long string) (false) String#slice and strict comparison|50,340,673|25170810|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:45:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":42144791,"opsSec":84065342.40678906},{"name":"(short string) (true) String#slice and strict comparison","samples":27956824,"opsSec":55897946.71395163},{"name":"(long string) (true) String#startsWith","samples":33046822,"opsSec":66029924.59452688},{"name":"(long string) (true) String#slice and strict comparison","samples":25236700,"opsSec":50473131.28104906},{"name":"(short string) (false) String#startsWith","samples":45143128,"opsSec":90262822.32711872},{"name":"(short string) (false) String#slice and strict comparison","samples":28061909,"opsSec":56113808.30664664},{"name":"(long string) (false) String#startsWith","samples":41116622,"opsSec":82230795.9892034},{"name":"(long string) (false) String#slice and strict comparison","samples":25170810,"opsSec":50340673.5953364}]}-->
