## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|88,614,609|44357528|
|(short string) (true) String#slice and strict comparison|52,068,577|26037617|
|(long string) (true) String#startsWith|54,289,872|27144942|
|(long string) (true) String#slice and strict comparison|46,939,193|23469945|
|(short string) (false) String#startsWith|95,075,298|47538741|
|(short string) (false) String#slice and strict comparison|52,507,773|26253893|
|(long string) (false) String#startsWith|86,655,000|43329967|
|(long string) (false) String#slice and strict comparison|46,511,640|23255841|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:21:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":44357528,"opsSec":88614609.3907342},{"name":"(short string) (true) String#slice and strict comparison","samples":26037617,"opsSec":52068577.44892178},{"name":"(long string) (true) String#startsWith","samples":27144942,"opsSec":54289872.816286206},{"name":"(long string) (true) String#slice and strict comparison","samples":23469945,"opsSec":46939193.98563158},{"name":"(short string) (false) String#startsWith","samples":47538741,"opsSec":95075298.31054841},{"name":"(short string) (false) String#slice and strict comparison","samples":26253893,"opsSec":52507773.60816543},{"name":"(long string) (false) String#startsWith","samples":43329967,"opsSec":86655000.38420811},{"name":"(long string) (false) String#slice and strict comparison","samples":23255841,"opsSec":46511640.88370945}]}-->
