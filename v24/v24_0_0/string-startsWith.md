## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|82,398,567|41200150|
|(short string) (true) String#slice and strict comparison|56,252,066|28129282|
|(long string) (true) String#startsWith|66,911,645|33456068|
|(long string) (true) String#slice and strict comparison|49,886,421|24948789|
|(short string) (false) String#startsWith|90,829,023|45414517|
|(short string) (false) String#slice and strict comparison|55,373,348|27686685|
|(long string) (false) String#startsWith|87,540,763|43770390|
|(long string) (false) String#slice and strict comparison|51,384,825|25697686|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:21:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":41200150,"opsSec":82398567.65251367},{"name":"(short string) (true) String#slice and strict comparison","samples":28129282,"opsSec":56252066.32381893},{"name":"(long string) (true) String#startsWith","samples":33456068,"opsSec":66911645.93910514},{"name":"(long string) (true) String#slice and strict comparison","samples":24948789,"opsSec":49886421.799720086},{"name":"(short string) (false) String#startsWith","samples":45414517,"opsSec":90829023.10051723},{"name":"(short string) (false) String#slice and strict comparison","samples":27686685,"opsSec":55373348.182900816},{"name":"(long string) (false) String#startsWith","samples":43770390,"opsSec":87540763.01709197},{"name":"(long string) (false) String#slice and strict comparison","samples":25697686,"opsSec":51384825.88110582}]}-->
