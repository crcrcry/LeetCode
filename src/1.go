package main

import "fmt"

// 暴力枚举法
func twoSum1(nums []int, target int) []int {
	var i, j int = 0, 0
	
  for i = 0; i < len(nums) - 1; i++ {
			for j = i + 1; j < len(nums); j++ {
					if sum := nums[i] + nums[j]; sum == target {
							return []int{i, j}
					}
			}
	}
	return nil
}

// 哈希法
func twoSum2(nums []int, target int) []int {
	// 每个 key 的 index，存储于 slice
	var m map[int][]int = make(map[int][]int)

	// 构造哈希表
	for i, v := range nums {
		if sli, ok := m[v]; ok {
			m[v] = append(sli, i)
		} else {
			m[v] = []int{i}
		}
	}

	// 哈希表查询
	for k, v := range m {
		if sli, ok := m[target - k]; ok {
			if k == target - k {
				if len(v) > 1 {
					return []int{v[0], v[1]}
				}
			} else {
				return []int{v[0], sli[0]}
			}
		}
	}
	return nil
}

// [3, 2, 4] 6
// [3, 3] 6
func main () {
	fmt.Println(twoSum2([]int{3, 4, 2}, 6))
}

