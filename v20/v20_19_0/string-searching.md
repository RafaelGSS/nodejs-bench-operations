## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|16,245,002|8154848|
|Using indexof|16,290,042|8145023|
|Using RegExp.test|13,017,288|6509781|
|Using RegExp.text with cached regex pattern|14,107,262|7053632|
|Using new RegExp.test|4,419,548|2210975|
|Using new RegExp.test with cached regex pattern|5,176,959|2589831|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:13:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using includes","samples":8154848,"opsSec":16245002.0662215},{"name":"Using indexof","samples":8145023,"opsSec":16290042.579091057},{"name":"Using RegExp.test","samples":6509781,"opsSec":13017288.088047625},{"name":"Using RegExp.text with cached regex pattern","samples":7053632,"opsSec":14107262.250699481},{"name":"Using new RegExp.test","samples":2210975,"opsSec":4419548.691253192},{"name":"Using new RegExp.test with cached regex pattern","samples":2589831,"opsSec":5176959.596029116}]}-->
