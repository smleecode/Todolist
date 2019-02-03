package com.task.home;

import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.task.service.TaskService;

@RestController
@RequestMapping(value = "/task")
public class TaskController {
	
	@Inject
	TaskService taskService;
	
	@RequestMapping(value = "/insert", method = RequestMethod.POST)
	public String insert(@RequestBody Map<String, Object> paramMap) throws Exception {
		
		taskService.insert(paramMap);
		
		return "SUCCESS";
	}
	
	@ResponseBody
	@RequestMapping(value = "/select", method = RequestMethod.GET)
	public List<Map<String, Object>> select(@RequestParam Map<String, Object> paramMap) throws Exception {

		return taskService.select(paramMap);
	}
	
	@RequestMapping(value = "/update", method = RequestMethod.PUT)
	public String update(@RequestBody Map<String, Object> paramMap) throws Exception {
		
		taskService.update(paramMap);
		
		return "SUCCESS";
	}

	@RequestMapping(value = "/delete", method = RequestMethod.DELETE)
	public String delete(@RequestBody Map<String, Object> paramMap) throws Exception {
		
		taskService.delete(paramMap);
		
		return "SUCCESS";
	}
}