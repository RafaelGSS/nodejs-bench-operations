## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|52,771,616|26385818|
|(short string) (true) String#slice and strict comparison|51,278,896|25639461|
|(long string) (true) String#endsWith|50,891,579|25445800|
|(long string) (true) String#slice and strict comparison|44,658,350|22332079|
|(short string) (false) String#endsWith|57,494,338|28747177|
|(short string) (false) String#slice and strict comparison|61,022,505|30511288|
|(long string) (false) String#endsWith|56,024,351|28014131|
|(long string) (false) String#slice and strict comparison|52,880,943|26440484|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:58:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26385818,"opsSec":52771616.5800451},{"name":"(short string) (true) String#slice and strict comparison","samples":25639461,"opsSec":51278896.66822504},{"name":"(long string) (true) String#endsWith","samples":25445800,"opsSec":50891579.846934386},{"name":"(long string) (true) String#slice and strict comparison","samples":22332079,"opsSec":44658350.00294872},{"name":"(short string) (false) String#endsWith","samples":28747177,"opsSec":57494338.13156268},{"name":"(short string) (false) String#slice and strict comparison","samples":30511288,"opsSec":61022505.580028564},{"name":"(long string) (false) String#endsWith","samples":28014131,"opsSec":56024351.05210176},{"name":"(long string) (false) String#slice and strict comparison","samples":26440484,"opsSec":52880943.780527756}]}-->
