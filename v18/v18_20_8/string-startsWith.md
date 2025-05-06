## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|71,592,940|35796987|
|(short string) (true) String#slice and strict comparison|50,835,063|25731320|
|(long string) (true) String#startsWith|52,250,144|26125383|
|(long string) (true) String#slice and strict comparison|45,362,162|22689294|
|(short string) (false) String#startsWith|102,472,692|51236355|
|(short string) (false) String#slice and strict comparison|60,369,552|30217942|
|(long string) (false) String#startsWith|90,070,559|45229779|
|(long string) (false) String#slice and strict comparison|51,146,494|25573254|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:18:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":35796987,"opsSec":71592940.7706788},{"name":"(short string) (true) String#slice and strict comparison","samples":25731320,"opsSec":50835063.14980332},{"name":"(long string) (true) String#startsWith","samples":26125383,"opsSec":52250144.118784696},{"name":"(long string) (true) String#slice and strict comparison","samples":22689294,"opsSec":45362162.814466506},{"name":"(short string) (false) String#startsWith","samples":51236355,"opsSec":102472692.37469691},{"name":"(short string) (false) String#slice and strict comparison","samples":30217942,"opsSec":60369552.47126578},{"name":"(long string) (false) String#startsWith","samples":45229779,"opsSec":90070559.46636547},{"name":"(long string) (false) String#slice and strict comparison","samples":25573254,"opsSec":51146494.59961842}]}-->
