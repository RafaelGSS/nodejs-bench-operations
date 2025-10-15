## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|90,622,657|45313365|
|(short string) (true) String#slice and strict comparison|60,486,383|30243197|
|(long string) (true) String#endsWith|62,332,384|31172223|
|(long string) (true) String#slice and strict comparison|54,949,531|27474769|
|(short string) (false) String#endsWith|95,909,911|47955282|
|(short string) (false) String#slice and strict comparison|61,886,336|30943172|
|(long string) (false) String#endsWith|89,623,932|44811975|
|(long string) (false) String#slice and strict comparison|55,773,622|27886819|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:55:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":45313365,"opsSec":90622657.41777565},{"name":"(short string) (true) String#slice and strict comparison","samples":30243197,"opsSec":60486383.23342378},{"name":"(long string) (true) String#endsWith","samples":31172223,"opsSec":62332384.185001135},{"name":"(long string) (true) String#slice and strict comparison","samples":27474769,"opsSec":54949531.95555148},{"name":"(short string) (false) String#endsWith","samples":47955282,"opsSec":95909911.0453256},{"name":"(short string) (false) String#slice and strict comparison","samples":30943172,"opsSec":61886336.69741227},{"name":"(long string) (false) String#endsWith","samples":44811975,"opsSec":89623932.79220492},{"name":"(long string) (false) String#slice and strict comparison","samples":27886819,"opsSec":55773622.16029131}]}-->
