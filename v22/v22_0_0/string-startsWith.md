## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,688,371|7844186|
|(short string) (true) String#slice and strict comparison|16,114,635|8057318|
|(long string) (true) String#startsWith|14,799,262|7399632|
|(long string) (true) String#slice and strict comparison|16,161,627|8080814|
|(short string) (false) String#startsWith|16,009,767|8004884|
|(short string) (false) String#slice and strict comparison|16,204,602|8102302|
|(long string) (false) String#startsWith|15,578,299|7789150|
|(long string) (false) String#slice and strict comparison|16,209,932|8104967|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:35:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15688371.341082046,"samples":7844186},{"name":"(short string) (true) String#slice and strict comparison","opsSec":16114635.29094757,"samples":8057318},{"name":"(long string) (true) String#startsWith","opsSec":14799262.993625548,"samples":7399632},{"name":"(long string) (true) String#slice and strict comparison","opsSec":16161627.806064576,"samples":8080814},{"name":"(short string) (false) String#startsWith","opsSec":16009767.135413107,"samples":8004884},{"name":"(short string) (false) String#slice and strict comparison","opsSec":16204602.63881905,"samples":8102302},{"name":"(long string) (false) String#startsWith","opsSec":15578299.408096852,"samples":7789150},{"name":"(long string) (false) String#slice and strict comparison","opsSec":16209932.897787644,"samples":8104967}]}-->
