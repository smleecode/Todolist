package com.task.service;

import java.util.List;
import java.util.Map;

public interface TaskService {

	public List<Map<String, Object>> select(Map<String, Object> paramMap) throws Exception;

	public int insert(Map<String, Object> paramMap) throws Exception;

	public int update(Map<String, Object> paramMap) throws Exception;
	
	public int delete(Map<String, Object> paramMap) throws Exception;

}
