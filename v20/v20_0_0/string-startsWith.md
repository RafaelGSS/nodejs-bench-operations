## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|87,391,003|43712074|
|(short string) (true) String#slice and strict comparison|63,766,400|31883216|
|(long string) (true) String#startsWith|66,514,422|33265149|
|(long string) (true) String#slice and strict comparison|57,759,744|28879884|
|(short string) (false) String#startsWith|99,170,657|49585348|
|(short string) (false) String#slice and strict comparison|62,938,176|31470079|
|(long string) (false) String#startsWith|90,901,939|45451027|
|(long string) (false) String#slice and strict comparison|58,315,624|29173637|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:47:54 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":43712074,"opsSec":87391003.0394952},{"name":"(short string) (true) String#slice and strict comparison","samples":31883216,"opsSec":63766400.88199637},{"name":"(long string) (true) String#startsWith","samples":33265149,"opsSec":66514422.33767644},{"name":"(long string) (true) String#slice and strict comparison","samples":28879884,"opsSec":57759744.7805826},{"name":"(short string) (false) String#startsWith","samples":49585348,"opsSec":99170657.91846736},{"name":"(short string) (false) String#slice and strict comparison","samples":31470079,"opsSec":62938176.706197284},{"name":"(long string) (false) String#startsWith","samples":45451027,"opsSec":90901939.64535993},{"name":"(long string) (false) String#slice and strict comparison","samples":29173637,"opsSec":58315624.710894406}]}-->
