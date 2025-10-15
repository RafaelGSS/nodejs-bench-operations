## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|91,825,201|45946693|
|(short string) (true) String#slice and strict comparison|60,587,981|30304356|
|(long string) (true) String#startsWith|59,914,425|29960859|
|(long string) (true) String#slice and strict comparison|54,819,244|27424195|
|(short string) (false) String#startsWith|95,973,679|47997323|
|(short string) (false) String#slice and strict comparison|61,470,937|30743123|
|(long string) (false) String#startsWith|88,951,969|44800061|
|(long string) (false) String#slice and strict comparison|55,347,970|27674485|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:08:23 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":45946693,"opsSec":91825201.01333715},{"name":"(short string) (true) String#slice and strict comparison","samples":30304356,"opsSec":60587981.57975057},{"name":"(long string) (true) String#startsWith","samples":29960859,"opsSec":59914425.69541975},{"name":"(long string) (true) String#slice and strict comparison","samples":27424195,"opsSec":54819244.252408326},{"name":"(short string) (false) String#startsWith","samples":47997323,"opsSec":95973679.20614591},{"name":"(short string) (false) String#slice and strict comparison","samples":30743123,"opsSec":61470937.27778035},{"name":"(long string) (false) String#startsWith","samples":44800061,"opsSec":88951969.91314904},{"name":"(long string) (false) String#slice and strict comparison","samples":27674485,"opsSec":55347970.08357247}]}-->
