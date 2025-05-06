## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|89,566,685|44783353|
|(short string) (true) String#slice and strict comparison|60,806,450|30408486|
|(long string) (true) String#startsWith|66,178,803|33089409|
|(long string) (true) String#slice and strict comparison|54,738,804|27384560|
|(short string) (false) String#startsWith|94,256,829|47133996|
|(short string) (false) String#slice and strict comparison|61,174,943|30607806|
|(long string) (false) String#startsWith|88,006,894|44003458|
|(long string) (false) String#slice and strict comparison|54,677,516|27340783|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:20:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":44783353,"opsSec":89566685.57879569},{"name":"(short string) (true) String#slice and strict comparison","samples":30408486,"opsSec":60806450.90302606},{"name":"(long string) (true) String#startsWith","samples":33089409,"opsSec":66178803.970093556},{"name":"(long string) (true) String#slice and strict comparison","samples":27384560,"opsSec":54738804.11759317},{"name":"(short string) (false) String#startsWith","samples":47133996,"opsSec":94256829.54070482},{"name":"(short string) (false) String#slice and strict comparison","samples":30607806,"opsSec":61174943.264767244},{"name":"(long string) (false) String#startsWith","samples":44003458,"opsSec":88006894.87834522},{"name":"(long string) (false) String#slice and strict comparison","samples":27340783,"opsSec":54677516.25508105}]}-->
