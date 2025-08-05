## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|85,179,165|42645179|
|(short string) (true) String#slice and strict comparison|56,090,167|28053544|
|(long string) (true) String#startsWith|67,616,289|33809406|
|(long string) (true) String#slice and strict comparison|51,161,024|25584515|
|(short string) (false) String#startsWith|91,676,182|45863360|
|(short string) (false) String#slice and strict comparison|56,262,449|28132194|
|(long string) (false) String#startsWith|87,288,003|43644810|
|(long string) (false) String#slice and strict comparison|49,691,456|24845856|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:46:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":42645179,"opsSec":85179165.7984001},{"name":"(short string) (true) String#slice and strict comparison","samples":28053544,"opsSec":56090167.83996939},{"name":"(long string) (true) String#startsWith","samples":33809406,"opsSec":67616289.2362486},{"name":"(long string) (true) String#slice and strict comparison","samples":25584515,"opsSec":51161024.01599583},{"name":"(short string) (false) String#startsWith","samples":45863360,"opsSec":91676182.40433541},{"name":"(short string) (false) String#slice and strict comparison","samples":28132194,"opsSec":56262449.758605815},{"name":"(long string) (false) String#startsWith","samples":43644810,"opsSec":87288003.60074931},{"name":"(long string) (false) String#slice and strict comparison","samples":24845856,"opsSec":49691456.98344276}]}-->
