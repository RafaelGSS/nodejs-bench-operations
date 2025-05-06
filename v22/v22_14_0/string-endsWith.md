## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|91,928,050|45964034|
|(short string) (true) String#slice and strict comparison|59,605,129|29802570|
|(long string) (true) String#endsWith|62,412,550|31206786|
|(long string) (true) String#slice and strict comparison|49,554,011|24783755|
|(short string) (false) String#endsWith|96,098,233|48051112|
|(short string) (false) String#slice and strict comparison|60,260,124|30132990|
|(long string) (false) String#endsWith|86,450,454|43466989|
|(long string) (false) String#slice and strict comparison|54,080,963|27045636|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:11:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":45964034,"opsSec":91928050.71752647},{"name":"(short string) (true) String#slice and strict comparison","samples":29802570,"opsSec":59605129.27107673},{"name":"(long string) (true) String#endsWith","samples":31206786,"opsSec":62412550.80584372},{"name":"(long string) (true) String#slice and strict comparison","samples":24783755,"opsSec":49554011.68543294},{"name":"(short string) (false) String#endsWith","samples":48051112,"opsSec":96098233.80913576},{"name":"(short string) (false) String#slice and strict comparison","samples":30132990,"opsSec":60260124.64420857},{"name":"(long string) (false) String#endsWith","samples":43466989,"opsSec":86450454.38419648},{"name":"(long string) (false) String#slice and strict comparison","samples":27045636,"opsSec":54080963.62752296}]}-->
