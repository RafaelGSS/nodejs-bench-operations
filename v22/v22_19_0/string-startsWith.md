## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|91,091,242|45550407|
|(short string) (true) String#slice and strict comparison|60,365,563|30183264|
|(long string) (true) String#startsWith|65,474,099|32739816|
|(long string) (true) String#slice and strict comparison|54,498,608|27251784|
|(short string) (false) String#startsWith|95,774,010|47887880|
|(short string) (false) String#slice and strict comparison|61,722,988|30863236|
|(long string) (false) String#startsWith|87,886,866|43943492|
|(long string) (false) String#slice and strict comparison|54,807,338|27408640|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:06:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":45550407,"opsSec":91091242.67876677},{"name":"(short string) (true) String#slice and strict comparison","samples":30183264,"opsSec":60365563.479026735},{"name":"(long string) (true) String#startsWith","samples":32739816,"opsSec":65474099.43859743},{"name":"(long string) (true) String#slice and strict comparison","samples":27251784,"opsSec":54498608.19066578},{"name":"(short string) (false) String#startsWith","samples":47887880,"opsSec":95774010.20883349},{"name":"(short string) (false) String#slice and strict comparison","samples":30863236,"opsSec":61722988.84829331},{"name":"(long string) (false) String#startsWith","samples":43943492,"opsSec":87886866.75891975},{"name":"(long string) (false) String#slice and strict comparison","samples":27408640,"opsSec":54807338.387275256}]}-->
