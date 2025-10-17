## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|89,113,051|44556533|
|(short string) (true) String#slice and strict comparison|62,142,924|31075989|
|(long string) (true) String#startsWith|62,837,828|31453144|
|(long string) (true) String#slice and strict comparison|55,491,925|27752852|
|(short string) (false) String#startsWith|95,908,391|47962755|
|(short string) (false) String#slice and strict comparison|61,465,090|30732551|
|(long string) (false) String#startsWith|89,718,349|44865224|
|(long string) (false) String#slice and strict comparison|55,250,735|27625567|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:23:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":44556533,"opsSec":89113051.9201378},{"name":"(short string) (true) String#slice and strict comparison","samples":31075989,"opsSec":62142924.89441553},{"name":"(long string) (true) String#startsWith","samples":31453144,"opsSec":62837828.9502232},{"name":"(long string) (true) String#slice and strict comparison","samples":27752852,"opsSec":55491925.576846965},{"name":"(short string) (false) String#startsWith","samples":47962755,"opsSec":95908391.50301741},{"name":"(short string) (false) String#slice and strict comparison","samples":30732551,"opsSec":61465090.444562994},{"name":"(long string) (false) String#startsWith","samples":44865224,"opsSec":89718349.48057254},{"name":"(long string) (false) String#slice and strict comparison","samples":27625567,"opsSec":55250735.42119467}]}-->
